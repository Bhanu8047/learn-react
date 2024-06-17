import PropTypes from "prop-types";

const CountryVowelCount = (props) => {
  const { value } = props;
  const countVowels = () => {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let i = 0; i < value.length; i++) {
      if (vowels.indexOf(value[i]) !== -1) {
        count++;
      }
    }
    return count;
  };
  return (
    <div>
      <h1 className="text-2xl">Vowel Count: {countVowels()}</h1>
    </div>
  );
};

CountryVowelCount.propTypes = {
  value: PropTypes.string.isRequired,
};

export default CountryVowelCount;
