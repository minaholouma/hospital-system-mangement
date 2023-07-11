const { number } = require('joi');
const mongoose = require('mongoose')
Schema = mongoose.Schema;
doctorSchema = new Schema({
    image: String,
    name: String,
    title: String,
    about: String,
    rate: String,
    views: String,
    clinicName: String,
    location: String,
    waitingTime: String,
    price: String,
    phone: String
}
)
doctor = mongoose.model('Doctor', doctorSchema);
const Doctor = mongoose.model('Doctor', doctorSchema);

// API endpoint to handle form data submission
app.post('https://asd-6gr1.onrender.com/doctors', (req, res) => {
  const formData = req.body;

  // Create a new Doctor document with the form data
  const newDoctor = new Doctor({
    name: formData.name,
    image: formData.image,
    clinicName: formData.clinicName,
    location: formData.location,
    email: formData.email,
    phone: formData.phone,
    price: formData.price,
  });

  // Save the new Doctor document to the "doctors" collection
  newDoctor.save((err) => {
    if (err) {
      console.error('Error saving Doctor:', err);
      res.status(500).json({ message: 'Error saving Doctor' });
    } else {
      res.status(200).json({ message: 'Doctor saved successfully' });
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
module.exports = doctor;


