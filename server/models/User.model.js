import mongoose from 'mongoose'

const userSchema = mongoose.Schema({})

export const User = mongoose.model('User', userSchema)
