import mongoose from 'mongoose'

const buildSchema = mongoose.Schema({})

export const Build = mongoose.model('Build', buildSchema)
