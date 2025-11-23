import sharp from "sharp";
import path from "path";

const createThumbnail = async (req, res, next) => {
  if (!req.file) {
    next();
    return;
  }
  const filePath = req.file.path;
  const thumbPath = path.join(
    req.file.destination,
    req.file.filename.replace(path.extname(req.file.filename), "") + "_thumb.png"
  );
  try {
    await sharp(filePath)
      .resize(160, 160)
      .png()
      .toFile(thumbPath);
    console.log("Thumbnail created:", thumbPath);
    next();
  } catch (error) {
    console.error("Error creating thumbnail:", error);
    next(error);
  }
};

export { createThumbnail };
