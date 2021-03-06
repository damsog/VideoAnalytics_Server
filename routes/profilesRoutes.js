const express = require("express");
const router = express.Router();
const profilesController = require("../controllers/profilesController");
const relationsController = require("../controllers/relationsController");

// /api/profiles
/**
 * @swagger
 * /api/profiles:
 *  post:
 *      summary: Create a new profile associating it with a user
 *      security:
 *          - bearerAuth: []
 *      tags: [Profiles]
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/profile'
 *      responses:
 *          200:
 *              description: profile just created
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/profile'
 *                                
 */
router.post('/', profilesController.createProfile);

/**
 * @swagger
 * /api/profiles:
 *  get:
 *      summary: Return all profiles
 *      security:
 *          - bearerAuth: []
 *      tags: [Profiles]
 *      responses:
 *          200:
 *              description: list of all profiles
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/profile'
 *                                
 */
router.get('/', profilesController.getAllProfiles);

/**
 * @swagger
 * /api/profiles/{id}:
 *  get:
 *      summary: Return a profile given its id
 *      security:
 *          - bearerAuth: []
 *      tags: [Profiles]
 *      parameters:
 *          -   in: path
 *              name: id
 *              schema:
 *                  type: string
 *              required: true
 *              description: profile id
 *      responses:
 *          200:
 *              description: Profile for the id
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/profile'
 *                                
 */
router.get('/:id', profilesController.getProfileById);

/**
 * @swagger
 * /api/profiles/{id}:
 *  put:
 *      summary: Updates profile info
 *      security:
 *          - bearerAuth: []
 *      tags: [Profiles]
 *      parameters:
 *          -   in: path
 *              name: id
 *              schema:
 *                  type: string
 *              required: true
 *              description: profile id
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/profile'
 *      responses:
 *          200:
 *              description: If operation was succesful
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/profile'
 *          404:
 *              description: User not found
 *                                
 */
router.put('/:id', profilesController.updateProfileById);

/**
 * @swagger
 * /api/profiles/{id}:
 *  delete:
 *      summary: Deletes a profile given an id
 *      security:
 *          - bearerAuth: []
 *      tags: [Profiles]
 *      parameters:
 *          -   in: path
 *              name: id
 *              schema:
 *                  type: string
 *              required: true
 *              description: profile id
 *      responses:
 *          200:
 *              description: If operation was succesful
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: string
 *          404:
 *              description: User not found
 *                                
 */
router.delete('/:id', profilesController.deleteProfileById);

/**
 * @swagger
 * /api/profiles/byuId/{userId}:
 *  get:
 *      summary: Return all profiles for a user
 *      security:
 *          - bearerAuth: []
 *      tags: [Profiles]
 *      parameters:
 *          -   in: path
 *              name: userId
 *              schema:
 *                  type: string
 *              required: true
 *              description: user id
 *      responses:
 *          200:
 *              description: list of all profiles for a user
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/profile'
 *                                
 */
router.get('/byuId/:userId', profilesController.getProfilesByUserId);

/**
 * @swagger
 * /api/profiles/bygId/{groupId}:
 *  get:
 *      summary: Returns all the profiles that a group contains
 *      security:
 *          - bearerAuth: []
 *      tags: [Profiles]
 *      parameters:
 *          -   in: path
 *              name: groupId
 *              schema:
 *                  type: string
 *              required: true
 *              description: group id
 *      responses:
 *          200:
 *              description: list of all profiles for a group
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/profile'
 *                                
 */
router.get('/bygId/:groupId', relationsController.getProfilesByGroup);

// TODO: Fix foreign keys on table relations

/**
 * @swagger
 * components:
 *  schemas:
 *      profile:
 *          type: object
 *          required:
 *              - fullname
 *              - nickname
 *          properties:
 *              id:
 *                  type: int
 *                  description: The auto-generated id of the user
 *              fullname:
 *                  type: string
 *                  description: Full name of the profile
 *              nickname:
 *                  type: string
 *                  description: a code name for easier recognition
 *              time_register:
 *                  type: string
 *                  description: time
 *              createdAt:
 *                  type: string
 *                  description: time
 *              updatedAt:
 *                  type: string
 *                  description: time
 *              userId:
 *                  type: int
 *                  description: id of the parent user
*/

module.exports = router;