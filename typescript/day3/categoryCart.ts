type ProductType = {
    id: number;
    title: string;
    price: number;
    category: string;
};

type ApiResponse = {
    products: ProductType[];
};

async function prodData() {
    try {
        let res = await fetch("https://dummyjson.com/products");

        if (res.ok) {
            const dataJson = await res.json() as ApiResponse;

            console.log("Price 5-10:", filterPrice5(dataJson.products));
            console.log("Price >10:", filterPrice10(dataJson.products));
            console.log("Sort A-Z:", sortingA(dataJson.products));
            console.log("Sort Z-A:", sortingD(dataJson.products));
        }
    } catch (e) {
        console.log(e);
    }
}

function filterPrice5(data: ProductType[]) {
    return data.filter(x => x.price > 5 && x.price < 10);
}

function filterPrice10(data: ProductType[]) {
    return data.filter(x => x.price > 10);
}

function sortingA(data: ProductType[]) {
    return [...data].sort((a, b) => a.title.localeCompare(b.title));
}

function sortingD(data: ProductType[]) {
    return [...data].sort((a, b) => b.title.localeCompare(a.title));
}

prodData(); 