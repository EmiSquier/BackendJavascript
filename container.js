const fs = require('fs');
const { urlToHttpOptions } = require('url');

class Container {
    constructor(file) {
        this.filename = file
    }

    save = async (product) => {
        try {
            if (fs.existsSync(this.filename)) {
                let result = await fs.promises.readFile(this.filename)
                let products = JSON.parse(result)
                if (products.length > 0) {
                    lastId = products[product.id - 1].id + 1;
                    let newProduct = {
                        id: lastId,
                        ...product
                    }
                } else {
                    let newProduct = {
                        id: 1,
                        ...product
                    }
                    products.push(newProduct);
                    await fs.promises.writeFile(this.filename, JSON.stringify(products));
                    return lastId;
                } else {
                    let newProduct = {
                        id: 1,
                        ...product
                    }
                    products.push(newProduct);
                    await fs.promises.writeFile(this.filename, JSON.stringify(products));
                    return 1;
                }
            } else {
            let newProduct = {
                id: 1,
                ...product
            }
            await fs.promises.writeFile(this.filename, JSON.stringify([newProduct]));
            return 1;
        }

    }
    catch(error) {
        console.log(error);
    }
}
}

let container = new Container("products")

let product1 = {
    title: "Race Helmet",
    price: 600,
    thumbnail: "https://ururacer.uy/wp-content/uploads/2021/11/AGV21M.00004JQ_SN005894_CLOSEUP03-600x600.png"
}
let product2 = {
    title: "Race jacket",
    price: 1600,
    thumbnail: "https://http2.mlstatic.com/D_NQ_NP_944915-MLU32032416543_082019-O.jpg"
}

let product3 = {
    title: "Enduro tyres",
    price: 300,
    thumbnail: "https://www.bartl.com.uy/content/images/thumbs/0025395_combo-x-2-cubiertas-9090-21-y-400-18-metzeler-enduro-3-sahara_400.jpeg"
}


container.save(product1)
container.save(product2)
container.save(product3)