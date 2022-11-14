export const ERRORS = {
  CHECK_BOX_REQUIRED: 'Requerido.',
  CONFIRM_PASSWORD_REQUIRED: 'Por favor, confirma la contraseña.',
  EMAIL_DUPLICATE: 'Ya existe una cuenta con esta direccion de correo electronico.',
  EMAIL_REQUIRED: 'Por favor, introduzca una dirección de correo electrónico valida.',
  INVALID_CONFIRMED_PASSWORD: 'Las contraseñas no coinciden.',
  INVALID_EMAIL: 'Correo electronico invalido.',
  INVALID_PASSWORD: 'Contraseña incorrecta.',
  NAME_REQUIRED: 'Introduzca un nombre valido.',
  PASSWORD_REQUIRED: 'La contraseña debe tener minimo 6 digitos.',
  DOCUMENT_REQUIRED: 'Por favor, introduzca un documento valido (sin puntos, barras ni comas).',
  INVALID_CUIL: 'CUIT sin puntos, barras ni comas.',
  TEL_REQUIRED: 'Por favor, introduzca numero de telefono valido (código de área + Nº. Ejemplo: 1123456789).',
  CP_REQUIRED: 'Por favor, introduzca un documento valido (solo los 4 numeros del codigo).',
  PROVINCE_REQUIRED: 'Requerido.',
  LOCATION_REQUIRED: 'Requerido.',
  STREET_REQUIRED: 'Requerido.',
  STREET_HEIGHT_REQUIRED: 'Requerido.',
  TRANSPORT_REQUIRED: 'Requerido.',
  AMOUNT_REQUIRED: 'Valor de pedido en pesos sin puntos ni comas.',
}

export const USER_STATUS = {
  UNDEFINED: 0,
  LOADING: 1,
  OK: 2,
  NULL: 3,
}

export const CREATE_ORDER_STATUS = {
  UNDEFINED: 0,
  LOADING: 1,
  OK: 2,
  NULL: 3,
}

export const ORDER_STATUS = {
  PENDING: 'PENDIENTE',
  ON_DEPOSIT: 'EN DEPOSITO',
  SEND: 'ENVIADO',
}
