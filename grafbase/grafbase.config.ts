import { g, auth, config } from '@grafbase/sdk'

//@ts-ignore
const School = g.model('School', {
  title: g.string(),
  address: g.string(),
  bezirk: g.string().optional(),
  levels: g.string().optional(),
  timeSlots: g.string().optional(),
  startFrequency: g.string().optional(),
  website: g.url()
}).search()



export default config({
  schema: g
})
