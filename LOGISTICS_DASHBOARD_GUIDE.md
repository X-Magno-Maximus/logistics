# Marxia Logistics Dashboard Guide

## Purpose

This repository is reserved for the standalone Marxia Logistics dashboard. It will coordinate fulfillment, shipment assignment, delivery status, proof of delivery, exceptions, shipping costs, and authorized logistics staff or independent contractors.

## Current state

The repository currently contains a blank placeholder page. It has a shared EN/ES i18n runtime and governance documentation, but no operational dashboard is implemented. No live integration should be inferred from the placeholder.

## Planned connection to the SMB dashboard

| SMB dashboard provides | Logistics returns |
|---|---|
| Tenant-scoped order ready for fulfillment | Assignment and acceptance status |
| Delivery address and approved contact scope | Pickup, in-transit, delivered, or exception events |
| Package and handling requirements | Proof-of-delivery reference |
| Approved shipping budget | Actual carrier cost and settlement status |

The SMB dashboard should show logistics status in Orders and Logistics, then send approved costs to Accounting. Logistics users must receive only the minimum tenant and order data required for their assignment.

## Language support

- i18n.js supports English (en) and Spanish (es).
- The preference is stored under localStorage key marxia-language.
- New UI must use semantic keys and the documented data-i18n attributes.
- Operational data, addresses, names, tracking numbers, prices, and IDs must not be translated.
- Page-specific keys must be registered when the dashboard is built.

## Required security boundary

- Deny by default.
- Validate tenant, assignment, status, and role on every backend request.
- Separate dispatcher, driver/contractor, supervisor, SMB, and platform-support permissions.
- Minimize consumer personal data and prevent cross-tenant lookup.
- Audit assignment, reassignment, status changes, proof submission, exceptions, and settlement.
- Use signed, expiring access to proof files and delivery attachments.

## Build sequence

1. Define canonical shipment and event schemas.
2. Define roles, permissions, tenant boundaries, and owner approval.
3. Build the authenticated shell and responsive EN/ES navigation.
4. Implement assignment and status workflow.
5. Connect SMB Orders and Inventory events.
6. Connect approved costs to SMB Accounting.
7. Add audit history, offline reconciliation, monitoring, and tests.
