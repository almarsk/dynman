import slugify from "slugify";

const mySlugify = (str) => {
  return slugify(str, {
    lower: true,
    remove: /[*+~.()'"!:@?]/g,
  });
};

export default mySlugify;
