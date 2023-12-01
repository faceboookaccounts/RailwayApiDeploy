import { Router } from "express";
import redoc from 'redoc-express'
import {
  createNewStudent,
  deleteStudentById,
  getAllStudents,
  getStudentById,
  updateStudent,
} from "./students.services.js";

const studentRouter = Router();

/**
 * @swagger
 * /alumnos/:
 *    get:
 *      tags:
 *        - Estudiantes
 *      summary: Consultar todos los estudiantes
 *      description: Obtiene todos los estudiantes
 *      responses:
 *        200:
 *          description: Regresa un Json con todos los usuarios
 * 
 */
studentRouter.get("/alumnos", async (_, res) => {
  const result = await getAllStudents();
  res.json(result[0]);
});


/**
 * @swagger
 * /alumnos/{id}:
 *    get:
 *      tags:
 *        - Estudiantes
 *      summary: Obtener un estudiante por su id
 *      description: Obtiene un estudiante mediante su id
 *      parameters:
 *        - in: path
 *          name: id
 *      responses:
 *        200:
 *          description: Regresa un usuario en especifico
 * 
 */


studentRouter.get("/alumnos/:id", async (req, res) => {
  const { id } = req.params;
  const result = await getStudentById(id);
  res.json(result[0]);
});

/**
 * @swagger
 * /alumnos/{id}:
 *    delete:
 *      tags:
 *        - Estudiantes
 *      summary: Eliminar un estudiante por su id
 *      description: Elimina un estudiante mediante su id
 *      parameters:
 *        - in: path
 *          name: id
 *      responses:
 *        200:
 *          description: Elimina un estudiante especifico
 * 
 */

studentRouter.delete("/alumnos/:id", async (req, res) => {
  const { id } = req.params;
  const result = await deleteStudentById(id);
  res.json(result[0]);
});

/**
 * @swagger
 * /alumnos/new:
 *    post:
 *      tags:
 *        - Estudiantes
 *      summary: Crear un nuevo estudiante
 *      description: Se crea un nuevo estudiante
 *      responses:
 *        200:
 *          description: Creacion de un nuevo estudiante
 * 
 */

studentRouter.post("/alumnos/new", async (req, res) => {
  const result = await createNewStudent(req);
  res.json(result[0]);
});

/**
 * @swagger
 * /alumnos/{id}:
 *    put:
 *      tags:
 *        - Estudiantes
 *      summary: Edita un estudiante por su id
 *      description: Edita un estudiante mediante su id
 *      parameters:
 *        - in: path
 *          name: id
 *      responses:
 *        200:
 *          description: Se edita un estudiante en especifico
 * 
 */

studentRouter.put("/alumnos/:id", async (req, res) => {
  const result = await updateStudent(req);
  res.json(result[0]);
});

export default studentRouter;
