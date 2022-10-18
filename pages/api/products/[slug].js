import { db } from "../../../database";
import { Product } from "../../../models";

export default function (req, res) {
    switch (req.method) {
        case 'GET':
            return getProductBySlug(req, res);
    
        default:
            return res.status(400).json({
                message: 'Bad request'
            })
    }
};

const getProductBySlug = async (req, res) => {
    const { slug } = req.query;

    await db.connect();
    
    const product = await Product.find({slug}).lean();
    await db.disconnect();

    if(!product) return res.status(400).json({message: 'No hay producto'});

    return res.json(product);
}