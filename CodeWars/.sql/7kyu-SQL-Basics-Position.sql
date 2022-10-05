-- You have access to a table of monsters as follows:

-- monsters schema

-- id
-- name
-- legs
-- arms
-- characteristics
-- In each row, the characteristic column has a single comma. Your job is to find it using position(). You must return a table with the format as follows:

-- output schema

-- id
-- name
-- comma
-- The comma column will contain the position of the comma within the characteristics string. Order the results by comma.

results = run_sql

describe :query do
  describe "should contain keywords" do
    it "should contain SELECT" do
      expect($sql.upcase).to include("SELECT")
    end

    it "should contain FROM" do
      expect($sql.upcase).to include("FROM")
    end
    
    it "should contain ORDER BY comma" do
      expect($sql.upcase).to include("ORDER BY COMMA")
    end
  end

  describe :columns do
    it "should return 3 columns" do
      expect(results.first.keys.count).to eq 3
    end
    
    it "should return an id column" do
      expect(results.first.keys).to include(:id)
    end
    
    it "should return a name column" do
      expect(results.first.keys).to include(:name)
    end
    
    it "should return a comma column" do
      expect(results.first.keys).to include(:comma)
    end
 end
end
  
-- my code

/*  SQL  */

SELECT  id,
        name,
        position(',' IN characteristics) AS comma
FROM monsters
ORDER BY comma