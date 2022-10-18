import { db, SHOP_CONSTANTS } from "../../../database";
import { Product } from "../../../models";

export default function (req, res) {

    switch (req.method) {
        case 'GET':
            return getProducts(req, res);

        default:
            return res.status(400).json({
                message: 'Bad request'
            })
    }
}

const getProducts = async (req, res) => {

    const { gender = 'all' } = req.query;
    let condition = {};

    if (gender !== 'all' && SHOP_CONSTANTS.validGenders.includes(gender)) {
        condition = { gender };
    }

    await db.connect();

    const products = await Product.find(condition).select('images inStock price slug title -_id').lean();

    await db.disconnect();

    return res.status(200).json(products);

}