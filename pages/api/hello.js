// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).send(`<h1>HI! THIS IS THE SM LOGISTICA API ${process.env.MONGO_DB_URI}</h1>`)
}
