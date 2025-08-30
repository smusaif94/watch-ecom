# Azure Provider Configuration
provider "azurerm" {
  features {}
}

# Resource Group
resource "azurerm_resource_group" "rg" {
  name     = "watchecom_rg"
  location = "East US" # Update location as per requirement
}

# App Service Plan
resource "azurerm_app_service_plan" "app_service_plan" {
  name                = "dev-appservice-plan"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name

  sku {
    tier = "Free" # Options: Free, Basic, Standard, Premium
    size = "F1"
  }
}

# Frontend App Service
resource "azurerm_app_service" "frontend" {
  name                = "dev-frontend-app"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  app_service_plan_id = azurerm_app_service_plan.app_service_plan.id

  site_config {
    always_on = true
  }

  app_settings = {
    "WEBSITE_RUN_FROM_PACKAGE" = "1" # Add deployment package URL here
  }
}

# Backend App Service
resource "azurerm_app_service" "backend" {
  name                = "dev-backend-app"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  app_service_plan_id = azurerm_app_service_plan.app_service_plan.id

  site_config {
    always_on = true
  }

  app_settings = {
    "MONGODB_URI"          = "mongodb+srv://sample-uri" # Replace with actual MongoDB URI
    "RAZORPAY_KEY_ID"      = "sample-key-id"           # Replace with actual Razorpay Key ID
    "RAZORPAY_KEY_SECRET"  = "sample-key-secret"       # Replace with actual Razorpay Key Secret
  }
}

# Cosmos DB Account
resource "azurerm_cosmosdb_account" "cosmosdb" {
  name                = "dev-cosmosdb"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  offer_type          = "Standard"
  kind                = "MongoDB"

  consistency_policy {
    consistency_level = "Session"
  }

  mongo_server_version = "4.0"
}

# Storage Account
resource "azurerm_storage_account" "storage" {
  name                     = "devstorageacct" # Must be globally unique
  resource_group_name      = azurerm_resource_group.rg.name
  location                 = azurerm_resource_group.rg.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
}

# Key Vault
resource "azurerm_key_vault" "keyvault" {
  name                = "dev-keyvault"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  tenant_id           = "<tenant-id>" # Replace with your Azure tenant ID

  sku_name = "standard"
}

# Key Vault Secrets
resource "azurerm_key_vault_secret" "razorpay_key_id" {
  name         = "RazorpayKeyId"
  value        = "sample-key-id" # Replace with actual Razorpay Key ID
  key_vault_id = azurerm_key_vault.keyvault.id
}

resource "azurerm_key_vault_secret" "razorpay_key_secret" {
  name         = "RazorpayKeySecret"
  value        = "sample-key-secret" # Replace with actual Razorpay Key Secret
  key_vault_id = azurerm_key_vault.keyvault.id
}
