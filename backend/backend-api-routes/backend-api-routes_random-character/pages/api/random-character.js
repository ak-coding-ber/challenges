import Chance from "chance";

const chance = new Chance();

const character = {
  firstName: chance.first(),
  lastName: chance.last(),
  twitterName: chance.twitter(),
  geoHash: chance.geohash(),
};

export default function handler(req, res) {
  res.status(200).json(character);
}
