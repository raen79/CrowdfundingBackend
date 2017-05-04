# Class to parse a filter as sent by the front end in the array of filters for a custom search
class Filter

  # Constructor method
  def initialize(column, value, operator)
    # Default in case value = nil
    value ||= ""

    # List of potential operators and corresponding sql search strings (replace value by value)
    @operators = {
      :contains => "LIKE '%value%'",
      :doesnotcontain => "NOT LIKE '%value%'",
      :endswith => "LIKE '%value'",
      :eq => "= 'value'",
      :isempty => "= ''",
      :isnotempty => "!= ''",
      :isnotnull => "IS NOT NULL",
      :isnull => "IS NULL",
      :neq => "!= 'value'",
      :startswith => "LIKE 'value%'"
    }

    # If operator method parameter is a string, convert to symbol
    (operator.class == String) ? (operator = operator.to_sym) : nil

    # If column or operator is empty, filter is invalid and set all attributes to nil
    if column == nil || operator == nil || !@operators.key?(operator)
      @column, @operator, @value, @search_string = nil, nil, nil, nil
    # If column and operator are set, change filter parameters to constructor's parameters' values, and create the filter's search string
    else
      # Set up instance variables
      @column, @operator, @value = column, operator, value.downcase
      # Set up search string
      @search_string = "LOWER(CAST(" + @column + " AS TEXT)) " +  @operators[@operator].sub("value", @value)
    end
  end

  # Return column value
  def column
    @column
  end

  # Return value
  def value
    @value
  end

  # Return operator
  def operator
    @operator
  end

  # Return sql search string
  def search_string
    @search_string
  end
end