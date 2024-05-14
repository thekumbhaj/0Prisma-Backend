const { PrismaClient } = require('@prisma/client');

// Create an instance of PrismaClient
const prisma = new PrismaClient();

// Export the instance
module.exports = prisma;