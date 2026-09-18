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
    "audit.recorded": "This action was recorded in the audit history."
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
    "audit.recorded": "Esta acción se registró en el historial de auditoría."
  }
};
  let language = supported.has(localStorage.getItem(STORAGE_KEY)) ? localStorage.getItem(STORAGE_KEY) : "en";

  const format = (text, values = {}) => Object.entries(values).reduce(
    (result, [name, value]) => result.replaceAll(`{{${name}}}`, String(value)), text
  );
  const t = (key, values) => format(messages[language][key] ?? messages.en[key] ?? key, values);

  const localize = (root = document) => {
    document.documentElement.lang = language;
    root.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
    root.querySelectorAll("[data-i18n-placeholder]").forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
    root.querySelectorAll("[data-i18n-label]").forEach(el => { el.setAttribute("aria-label", t(el.dataset.i18nLabel)); });
    root.querySelectorAll("[data-i18n-title]").forEach(el => { el.title = t(el.dataset.i18nTitle); });
    document.dispatchEvent(new CustomEvent("marxia:languagechange", { detail: { language } }));
  };
  const setLanguage = locale => {
    if (!supported.has(locale)) return false;
    language = locale;
    localStorage.setItem(STORAGE_KEY, locale);
    localize();
    return true;
  };
  const register = (locale, additions) => {
    if (!supported.has(locale) || !additions || typeof additions !== "object") return false;
    Object.assign(messages[locale], additions);
    return true;
  };
  window.MarxiaI18n = { get language(){ return language; }, messages, t, localize, register, setLanguage };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => localize(), { once:true });
  else localize();
})();
