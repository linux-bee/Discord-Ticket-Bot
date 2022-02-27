const { Schema, model} = require('mongoose');

const details = new Schema({
    guild_id: String,
    user_id: String,
    ticket_channel_id: String,
    user_ticket_no: Number,
    ticket_status: String,
    close_ticket_id: String,
})

module.exports = model('Ticket-Details', details);