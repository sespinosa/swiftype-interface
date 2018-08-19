import { expect } from 'chai'
import SwiftypeInterface from '../src/SwiftypeInterface'

const { ENGINE, engine } = process.env


const targetEngine = ENGINE || engine

if(!targetEngine) {
  console.log("#####################")
  console.log("Can't run tests")
  console.log("engine or ENGINE must be passed as a env var")
  console.log("#####################")
}

describe('SwifType Interface', function() {
  this.timeout(10000)
  describe('The interface can get results', () => {
    it('should return results with only a query param', (done) => {
      SwiftypeInterface
        .search({
          engine_key: targetEngine,
          q: ""
        })
        .then(r => {
          expect(r).to.have.keys('info', "records", "record_count", "errors")
          expect(r.record_count).to.be.greaterThan(0)
          expect(r.records.page.length).to.be.greaterThan(0)
          expect(r.info.page).to.have.keys(
            "query", 
            "current_page", 
            "num_pages", 
            "per_page", 
            "total_result_count", 
            "facets"
          )
          expect(r.info.page.facets).to.be.empty
          expect(r.records.page[0].highlight).to.be.empty
          done()
        })
        .catch(err => done(err))
    })
  })
})