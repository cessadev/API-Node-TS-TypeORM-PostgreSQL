import "reflect-metadata";
import "dotenv/config";
import app from "./app";
import { AppDataSource } from "./db";

const PORT = process.env.PORT || 3001;

async function main() {
    try {
        await AppDataSource.initialize();
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    } catch (error) {
        return console.error(error);
    }
};

main();



