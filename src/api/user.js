/*
 * @Author: czj
 * @Date: 2021-05-10 14:00:03
 * @LastEditors: czj
 * @LastEditTime: 2021-05-11 14:16:05
 * @Description:
 */
import { get, post } from "../utils/http";
/**
 * @api {get} /user/:id Request User information
 * @apiVersion 0.1.0
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
export const GetUser = (id) => get('user', id)

/**
 * @api {post} /user Add User information
 * @apiVersion 0.1.0
 * @apiName PostUser
 * @apiGroup User
 *
 * @apiParam {Object} data Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotCreated The data of the User was not created.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Created
 *     {
 *       "error": "UserNotCreated"
 *     }
 */
 export const PostUser = (data) => post('user', data)

