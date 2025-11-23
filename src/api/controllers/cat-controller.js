import { addCat, findCatById, listAllCats } from "../models/cat-model.js";

const getCat = (req, res) => {
  res.json(listAllCats());
};

const getCatById = (req, res) => {
  const cat = findCatById(Number(req.params.id));
  if (cat) {
    res.json(cat);
  } else {
    res.sendStatus(404);
  }
};

const postCat = (req, res) => {
  console.log("Form data:", req.body);
  if (req.file) {
    console.log("File data:", req.file);
  }
  const result = addCat({ ...req.body, filename: req.file?.filename });
  if (result.cat_id) {
    res.status(201).json({ message: "New cat added.", result });
  } else {
    res.sendStatus(400);
  }
};

const putCat = (req, res) => {
  res.json({ message: 'Cat item updated.' });
};

const deleteCat = (req, res) => {
  res.json({ message: 'Cat item deleted.' });
};

export { getCat, getCatById, postCat, putCat, deleteCat };
