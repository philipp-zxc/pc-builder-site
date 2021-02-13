import mongoose from 'mongoose'

const componentSchema = mongoose.Schema({})

export const Component = mongoose.model('Components', componentSchema)
