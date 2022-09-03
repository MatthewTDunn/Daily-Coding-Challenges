/*For this challenge you need to create a simple SELECT statement that will return all columns from the people table WHERE their age is over 50

people table schema
id
name
age
You should return all people fields where their age is over 50 and order by the age descending

NOTE: Your solution should use pure SQL. Ruby is used within the test cases to do the actual testing.
*/

results = run_sql

RSpec.describe :items do
  it "should return people with age over 50" do
    record_count = get_all_records(:people).count
    actual_count = results.count
    expect(actual_count).to eq(record_count),
      "\nshould have #{record_count} people, got #{actual_count}"
  end
 
  it "should return names" do
    results.each do |result|
      expected_name = find_record(:people, result[:id]).name
      expect(result[:name]).to eq(expected_name),
        "\nwrong name for #{result[:id]}, expected #{expected_name}, got #{result[:name]}"
    end
  end
 
  it "should only return people with age over 50" do
    results.each do |result|
      expect(result[:age]).to be > 50,
        "\nonly people with age over 50 should be included"
    end
  end
 
  it "should only return people ordered by age descending" do
    last_highest = 100
    results.each do |result|
      expect(result[:age]).to be <= last_highest,
        "\nmust be ordered by age descending"
      last_highest = result[:age]
    end
  end
end

/* my code */

SELECT * FROM people WHERE (age > 50) ORDER BY age DESC

