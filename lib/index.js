/**
 * @module errors/index
 * @description Errors Bootstrap
 */

'use strict';

module.exports = {
  CustomError: require('./CustomError'),
  BadGateway: require('./errors/BadGateway'),
  BadRequest: require('./errors/BadRequest'),
  Conflict: require('./errors/Conflict'),
  FailedDependency: require('./errors/FailedDependency'),
  Forbidden: require('./errors/Forbidden'),
  GatewayTimeout: require('./errors/GatewayTimeout'),
  Gone: require('./errors/Gone'),
  HttpVersionNotSupported: require('./errors/HttpVersionNotSupported'),
  InternalServerError: require('./errors/InternalServerError'),
  MethodNotAllowed: require('./errors/MethodNotAllowed'),
  NetworkAuthenticationRequired: require('./errors/NetworkAuthenticationRequired'),
  NotAcceptable: require('./errors/NotAcceptable'),
  NotFound: require('./errors/NotFound'),
  NotImplemented: require('./errors/NotImplemented'),
  PaymentRequired: require('./errors/PaymentRequired'),
  ProxyAuthenticationRequired: require('./errors/ProxyAuthenticationRequired'),
  RequestTimeout: require('./errors/RequestTimeout'),
  ServiceUnavailable: require('./errors/ServiceUnavailable'),
  Unauthorized: require('./errors/Unauthorized'),
  UnprocessableEntity: require('./errors/UnprocessableEntity'),
};
