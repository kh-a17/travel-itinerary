const PostCreate = require('../models/PostCreate');

exports.postCreate = async (req, res) => {
    const {
        city_name,
        age,
        group,
        season,
        budget,
        accomodation,
        no_of_days,
        itinerary
    } = req.body;

    try {
        postCreate = new PostCreate({
            city_name,
            age,
            group,
            season,
            budget,
            accomodation,
            no_of_days,
            itinerary  // This is the array of day itinerary objects
        });

        // Save the itinerary to the database
        await postCreate.save();

        // Respond with a success message
        res.status(201).json({ message: 'Itinerary posted successfully' });

    } catch (err) {
        // Handle errors if something goes wrong
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};
