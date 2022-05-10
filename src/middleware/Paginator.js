const paginator = (model, item) => async(req, res, next) => {
 let query = model.find()

 const page = parseInt(req.query.page, 10) || 1

 const limit = parseInt(req.query.limit, 10) || 12
 const startIndex = (page - 1) * limit
 const endIndex = page * limit

 const total = await model.countDocuments()
 query = query.skip(startIndex).limit(limit).sort({createdAt: -1})

 const results = await query;

 const pagination = {}

 if(endIndex < total) {
  pagination.next = {
   page: page + 1,
   limit
  }
 }

 if (startIndex > 0) {
  pagination.prev = {
   page: page - 1,
   limit
  }
 }

 pagination.links = {
  current: `${req.protocol}://${req.get('host')}/api/v1/${item}?page=${page}&limit=${limit}`,
  first: `${req.protocol}://${req.get('host')}/api/v1/${item}?page=1&limit=${limit}`,
  next: pagination.next ? `${req.protocol}://${req.get('host')}/api/v1/${item}?page=${pagination.next.page}&limit=${pagination.next.limit}` : null,
  last: `${req.protocol}://${req.get('host')}/api/v1/${item}?page=${Math.ceil(total / limit)}&limit=${limit}`
 }

 res.payload = {
  pagination,
  data: results
 }
 next()
}

export default paginator;