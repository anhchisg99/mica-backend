import { contactService } from "../../services/index.js";
// import {newLocationString} from '../../utils/index.js'

export default async function createContact(req, res) {
  try {
    const {
        name,
        link
  
      } = req.body;
    // console.log(image)
    const contact = await contactService.createContact({ name, link });
    res.status(200).json(contact);
  } catch (error) {
    res.status(400).json({ error });
  }
}
