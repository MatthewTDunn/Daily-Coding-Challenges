-- Given the following table 'decimals':

-- decimals table schema
-- id
-- number1
-- number2
-- Return a table with a single column result which is the output of number1 raised to the power of number2.

results = run_sql

describe :query do
  describe "should contain keywords" do
    it "should contain SELECT" do
      expect($sql.upcase).to include("SELECT")
    end

    it "should contain FROM" do
      expect($sql.upcase).to include("FROM")
    end
  end

  describe :columns do
    it "should return 1 column" do
      expect(results.first.keys.count).to eq 1
    end
    
    it "should return a result column" do
      expect(results.first.keys).to include(:result)
    end
 end
end

-- my code

/*  SQL  */
SELECT POWER(number1,number2) AS result
FROM decimals