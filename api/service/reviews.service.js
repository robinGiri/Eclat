const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export async function add(data) {
    try {
        const reviewModel = await prisma.review.create({
            data: data,
        });
        return reviewModel;
    } catch (e) {
        console.error(e);
        throw e;
    }
}

export async function getByUserID(userId){
    try{
        const reviews = await prisma.review.findMany({
            where: {
             userID : userId,
            },
          });
        return reviews;
    }
    catch(e){
        console.log(e);
        throw(e);
    }
}

export async function deleteById(id) {
    try{
        await prisma.review.delete({
            where : {
                id: id
            }
        });
    }
    catch(e){
        console.log(e);
        throw(e);
    }
}

export async function deleteAll() {
    try {
        await prisma.review.deleteMany({});
    } catch (e) {
        console.error(e);
        throw e;
    }
}

export async function deleteAllByUserID(userId) {
    try {
        await prisma.review.deleteMany({
            where: {
                userID: userId,
            },
        });
    } catch (e) {
        console.error(e);
        throw e;
    }
}


