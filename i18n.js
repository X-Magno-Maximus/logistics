"use strict";
(() => {
  const STORAGE_KEY = "marxia-language";
  const supported = new Set(["en", "es"]);
  const messages = {
  "en": {
    "common.language": "Language",
    "common.english": "English",
    "common.spanish": "Spanish",
    "common.settings": "Settings",
    "common.support": "Tech Support",
    "common.notifications": "Notifications",
    "common.back": "Back to overview",
    "common.save": "Save",
    "common.cancel": "Cancel",
    "common.close": "Close",
    "common.search": "Search",
    "common.loading": "Loading…",
    "common.error": "Something went wrong. Please try again.",
    "logistics.title": "Logistics",
    "logistics.subtitle": "Coordinate deliveries, couriers, routes, proof of delivery, and shipping costs.",
    "logistics.dashboard": "Logistics dashboard",
    "logistics.deliveries": "Deliveries",
    "logistics.couriers": "Couriers",
    "logistics.routes": "Routes",
    "logistics.dispatch": "Dispatch",
    "logistics.tracking": "Tracking",
    "logistics.exceptions": "Exceptions",
    "logistics.costs": "Shipping costs",
    "logistics.accounting": "Accounting integration",
    "delivery.new": "New delivery",
    "delivery.assign": "Assign courier",
    "delivery.unassigned": "Unassigned",
    "delivery.ready": "Ready for dispatch",
    "delivery.inTransit": "In transit",
    "delivery.delivered": "Delivered",
    "delivery.delayed": "Delayed",
    "delivery.failed": "Delivery failed",
    "delivery.cancelled": "Cancelled",
    "delivery.proof": "Proof of delivery",
    "delivery.reference": "Delivery reference",
    "delivery.customer": "Customer",
    "delivery.address": "Delivery address",
    "delivery.zone": "Delivery zone",
    "delivery.fee": "Delivery fee",
    "delivery.estimated": "Estimated arrival",
    "delivery.actual": "Delivered at",
    "courier.independent": "Independent courier",
    "courier.staff": "Logistics staff",
    "courier.available": "Available",
    "courier.unavailable": "Unavailable",
    "action.schedule": "Schedule delivery",
    "action.dispatch": "Dispatch",
    "action.track": "Track delivery",
    "action.confirm": "Confirm delivery",
    "action.report": "Report exception",
    "action.reconcile": "Reconcile cost",
    "security.authorized": "Authorized access only",
    "security.denied": "You do not have permission to perform this action.",
    "audit.recorded": "This action was recorded in the audit history.",
    "page.title": "Marxia · Logistics",
    "common.profile": "Profile",
    "common.appearance": "Appearance",
    "common.light": "Light",
    "common.dark": "Dark",
    "common.logout": "Log out",
    "common.menu": "Menu",
    "common.openMenu": "Open navigation",
    "common.closeMenu": "Close navigation",
    "common.enableLight": "Enable light theme",
    "common.enableDark": "Enable dark theme",
    "common.changeLanguage": "Change language",
    "common.searchPlaceholder": "Search shipment, order, or customer…",
    "logistics.summary": "Logistics summary",
    "logistics.description": "Search, filter, schedule, and monitor every order moving through fulfillment.",
    "logistics.openAccounting": "Open logistics accounting",
    "logistics.scheduleShipment": "Schedule shipment",
    "logistics.readyToSchedule": "Ready to schedule",
    "logistics.onTimeDelivery": "On-time delivery",
    "logistics.shippingCostMtd": "Shipping cost month to date",
    "logistics.ordersShippedMtd": "Orders shipped this month",
    "logistics.packed": "Packed",
    "logistics.shipped": "Shipped",
    "logistics.delivered": "Delivered",
    "logistics.accountingIntegration": "Accounting integration",
    "logistics.carrierExpenses": "Carrier expenses",
    "logistics.shippingCollected": "Customer shipping collected",
    "logistics.netContribution": "Net logistics contribution",
    "logistics.unreconciled": "Unreconciled shipments",
    "logistics.reconcileAccounting": "Reconcile in Accounting",
    "logistics.shipmentQueue": "Shipment queue",
    "logistics.all": "All",
    "logistics.ready": "Ready",
    "logistics.inTransit": "In transit",
    "logistics.exception": "Exception",
    "logistics.customer": "Customer",
    "logistics.carrier": "Carrier",
    "logistics.scheduled": "Scheduled",
    "logistics.cost": "Cost",
    "logistics.deliveryStatus": "Delivery status",
    "logistics.pendingCost": "Pending cost",
    "logistics.posted": "Posted",
    "logistics.reconciled": "Reconciled",
    "logistics.delayed": "Delayed",
    "logistics.reviewHold": "Review hold",
    "logistics.chooseOrder": "Choose an order",
    "logistics.scheduledDate": "Scheduled date",
    "logistics.estimatedCost": "Estimated shipping cost (USD)",
    "logistics.sendAccounting": "Schedule and send to Accounting",
    "action.filter": "Filter shipments",
    "action.resolve": "Resolve",
    "action.proof": "Proof",
    "action.openProfile": "Open profile and appearance menu",
    "status.noShipments": "No shipments match the selected filter.",
    "status.scheduled": "Shipment scheduled and sent to Accounting.",
    "status.updated": "Delivery status updated.",
    "help.overviewLink": "The Overview fulfillment card opens directly to this live operating view."
  },
  "es": {
    "common.language": "Idioma",
    "common.english": "Inglés",
    "common.spanish": "Español",
    "common.settings": "Configuración",
    "common.support": "Soporte técnico",
    "common.notifications": "Notificaciones",
    "common.back": "Volver al resumen",
    "common.save": "Guardar",
    "common.cancel": "Cancelar",
    "common.close": "Cerrar",
    "common.search": "Buscar",
    "common.loading": "Cargando…",
    "common.error": "Ocurrió un problema. Inténtalo de nuevo.",
    "logistics.title": "Logística",
    "logistics.subtitle": "Coordina entregas, repartidores, rutas, comprobantes de entrega y costos de envío.",
    "logistics.dashboard": "Panel de logística",
    "logistics.deliveries": "Entregas",
    "logistics.couriers": "Repartidores",
    "logistics.routes": "Rutas",
    "logistics.dispatch": "Despacho",
    "logistics.tracking": "Seguimiento",
    "logistics.exceptions": "Incidencias",
    "logistics.costs": "Costos de envío",
    "logistics.accounting": "Integración contable",
    "delivery.new": "Nueva entrega",
    "delivery.assign": "Asignar repartidor",
    "delivery.unassigned": "Sin asignar",
    "delivery.ready": "Lista para despacho",
    "delivery.inTransit": "En tránsito",
    "delivery.delivered": "Entregada",
    "delivery.delayed": "Retrasada",
    "delivery.failed": "Entrega fallida",
    "delivery.cancelled": "Cancelada",
    "delivery.proof": "Comprobante de entrega",
    "delivery.reference": "Referencia de entrega",
    "delivery.customer": "Cliente",
    "delivery.address": "Dirección de entrega",
    "delivery.zone": "Zona de entrega",
    "delivery.fee": "Tarifa de entrega",
    "delivery.estimated": "Llegada estimada",
    "delivery.actual": "Entregada a las",
    "courier.independent": "Repartidor independiente",
    "courier.staff": "Personal de logística",
    "courier.available": "Disponible",
    "courier.unavailable": "No disponible",
    "action.schedule": "Programar entrega",
    "action.dispatch": "Despachar",
    "action.track": "Rastrear entrega",
    "action.confirm": "Confirmar entrega",
    "action.report": "Reportar incidencia",
    "action.reconcile": "Conciliar costo",
    "security.authorized": "Solo para usuarios autorizados",
    "security.denied": "No tienes permiso para realizar esta acción.",
    "audit.recorded": "Esta acción se registró en el historial de auditoría.",
    "page.title": "Marxia · Logística",
    "common.profile": "Perfil",
    "common.appearance": "Apariencia",
    "common.light": "Claro",
    "common.dark": "Oscuro",
    "common.logout": "Cerrar sesión",
    "common.menu": "Menú",
    "common.openMenu": "Abrir navegación",
    "common.closeMenu": "Cerrar navegación",
    "common.enableLight": "Activar tema claro",
    "common.enableDark": "Activar tema oscuro",
    "common.changeLanguage": "Cambiar idioma",
    "common.searchPlaceholder": "Buscar envío, pedido o cliente…",
    "logistics.summary": "Resumen de logística",
    "logistics.description": "Busca, filtra, programa y supervisa cada pedido durante su preparación y entrega.",
    "logistics.openAccounting": "Abrir contabilidad logística",
    "logistics.scheduleShipment": "Programar envío",
    "logistics.readyToSchedule": "Listos para programar",
    "logistics.onTimeDelivery": "Entregas a tiempo",
    "logistics.shippingCostMtd": "Costo de envío del mes",
    "logistics.ordersShippedMtd": "Pedidos enviados este mes",
    "logistics.packed": "Empacados",
    "logistics.shipped": "Enviados",
    "logistics.delivered": "Entregados",
    "logistics.accountingIntegration": "Integración contable",
    "logistics.carrierExpenses": "Gastos del transportista",
    "logistics.shippingCollected": "Envío cobrado al cliente",
    "logistics.netContribution": "Contribución logística neta",
    "logistics.unreconciled": "Envíos sin conciliar",
    "logistics.reconcileAccounting": "Conciliar en Contabilidad",
    "logistics.shipmentQueue": "Cola de envíos",
    "logistics.all": "Todos",
    "logistics.ready": "Listos",
    "logistics.inTransit": "En tránsito",
    "logistics.exception": "Incidencia",
    "logistics.customer": "Cliente",
    "logistics.carrier": "Transportista",
    "logistics.scheduled": "Programado",
    "logistics.cost": "Costo",
    "logistics.deliveryStatus": "Estado de entrega",
    "logistics.pendingCost": "Costo pendiente",
    "logistics.posted": "Contabilizado",
    "logistics.reconciled": "Conciliado",
    "logistics.delayed": "Retrasado",
    "logistics.reviewHold": "Revisar retención",
    "logistics.chooseOrder": "Elegir pedido",
    "logistics.scheduledDate": "Fecha programada",
    "logistics.estimatedCost": "Costo estimado de envío (USD)",
    "logistics.sendAccounting": "Programar y enviar a Contabilidad",
    "action.filter": "Filtrar envíos",
    "action.resolve": "Resolver",
    "action.proof": "Comprobante",
    "action.openProfile": "Abrir menú de perfil y apariencia",
    "status.noShipments": "Ningún envío coincide con el filtro seleccionado.",
    "status.scheduled": "Envío programado y enviado a Contabilidad.",
    "status.updated": "Estado de entrega actualizado.",
    "help.overviewLink": "La tarjeta de cumplimiento del Resumen abre directamente esta vista operativa."
  }
};
  let storedLanguage;
  try { storedLanguage = localStorage.getItem(STORAGE_KEY); } catch {}
  let language = supported.has(storedLanguage) ? storedLanguage : "en";

  const format = (text, values = {}) => Object.entries(values).reduce(
    (result, [name, value]) => result.replaceAll(`{{${name}}}`, String(value)),
    text
  );
  const t = (key, values) => format(messages[language][key] ?? messages.en[key] ?? key, values);

  const localize = (root = document) => {
    document.documentElement.lang = language;
    root.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
    root.querySelectorAll("[data-i18n-placeholder]").forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
    root.querySelectorAll("[data-i18n-label]").forEach(el => { el.setAttribute("aria-label", t(el.dataset.i18nLabel)); });
    root.querySelectorAll("[data-i18n-title]").forEach(el => { el.title = t(el.dataset.i18nTitle); });
    document.title = t("page.title");
    document.dispatchEvent(new CustomEvent("marxia:languagechange", { detail: { language } }));
  };
  const setLanguage = locale => {
    if (!supported.has(locale)) return false;
    language = locale;
    try { localStorage.setItem(STORAGE_KEY, locale); } catch {}
    localize();
    return true;
  };
  const register = (locale, additions) => {
    if (!supported.has(locale) || !additions || typeof additions !== "object") return false;
    Object.assign(messages[locale], additions);
    return true;
  };

  const observer = new MutationObserver(records => {
    records.forEach(record => record.addedNodes.forEach(node => {
      if (node.nodeType === Node.ELEMENT_NODE) localize(node);
    }));
  });

  window.MarxiaI18n = {
    get language(){ return language; },
    messages,
    t,
    localize,
    register,
    setLanguage
  };

  const start = () => {
    localize();
    observer.observe(document.body, { childList: true, subtree: true });
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start, { once: true });
  else start();
})();
