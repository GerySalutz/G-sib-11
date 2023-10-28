const {dbtodo} = require('../models');

class mydbcontroller{
    static async getAll(req, res, next){
       try {
    const data = await dbtodo.findAll({where: {status: 'active'}});
    if (!data){
        throw {items: 'not found'}
    }else{
    res.status(200).json(data);}

} catch (err) {
    next(err)
}
}      
    static async getOne(req, res, next){
        const {id} = req.params;
        try{
            const data = await dbtodo.findOne({where: {id}})
            res.status(200).json(data);
        } catch (err) {
            console.error(err);
            next(err)
        }

    }
    static async create(req, res, next){
        const {title, description} = req.body;
        try{
            const data = await dbtodo.create({title, description})
            res.status(200).json(data);
        } catch (err) {
            console.error(err);
            next(err)
        }
    }
    static async update(req, res, next){
        const {id} = req.params
        const {description} = req.body;
        try{
            const data = await dbtodo.update({description}, {where: {id}});
            cres.status(200).json(data);
        } catch (err) {
            console.error(err);
            next(err)
        }
    }
    static async delete(req, res, next){
        const {id} = req.params;
        try{
        const data = await dbtodo.update( {status: 'inactive'} ,{where: {id}})
        res.status(200).json({message : 'item was delete'});
    } catch (err) {
        console.error(err);
        next(err)
    }

    }
}

module.exports = mydbcontroller