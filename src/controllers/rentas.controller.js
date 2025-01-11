import {pool} from '../db.js'

export const getRentas = async (req, res) => {

    try {
        const [rows] = await pool.query('SELECT * FROM rentasPastos')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Ocurrio un error por parte del servidor, intentalo de nuevo '
        })
    }
};

export const getRentaById = async (req, res) => {

    try {
        const [rows] = await pool.query('SELECT * FROM rentasPastos WHERE id = ?', [req.params.id])
    
        if(rows.length <=0){
            return res.status(404).json({
                message: 'Renta no encontrada'
            })
        }
    
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Ocurrio un error por parte del servidor, intentalo de nuevo '
        })
    }

};

export const createRentas = async (req, res) => {

    try {
        const {fecha, metros, precio, total} = req.body
    
        const [rows] = await pool.query('INSERT INTO rentasPastos (fecha,metros,precio,total) VALUES (?,?,?,?)' , [fecha, metros, precio, total])
    
        res.send({
            id: rows.insertId,
            fecha, 
            metros,
            precio,
            total
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Ocurrio un error por parte del servidor, intentalo de nuevo '
        })
    }

};

export const updateRentas = async (req, res) => {
    
    try {
        const{id} = req.params
    
        const{fecha, metros, precio, total} = req.body
    
        const [result] = await pool.query('UPDATE rentasPastos SET fecha = IFNULL(?, fecha) , metros = IFNULL(?, metros ), precio = IFNULL(?, precio), total = IFNULL(?, total) WHERE id = ?', [fecha, metros, precio, total, id])
    
        console.log(result)
    
        if(result === 0) return res.status(404).json({
            message: 'Renta no encontrada'
        })
    
        const [rows] = await pool.query('SELECT * FROM rentasPastos WHERE id = ?', [req.params.id])
    
        res.json(rows)        
    } catch (error) {
        return res.status(500).json({
            message: 'Ocurrio un error por parte del servidor, intentalo de nuevo '
        })
    }
}

export const deleteRentas = async(req, res) => {

    try {
        const [result] = await pool.query('DELETE FROM rentasPastos WHERE id = ?', [req.params.id])
    
        if(result.affectedRows <=0){
            return res.status(404).json({
                message: 'Renta no encontrada'
            })
        }
    
        res.sendStatus(204)       
    } catch (error) {
        return res.status(500).json({
            message: 'Ocurrio un error por parte del servidor, intentalo de nuevo '
        })
    }
}