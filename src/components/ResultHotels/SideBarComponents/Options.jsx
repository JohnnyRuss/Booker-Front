import { Options as Opt, Title } from './styled';
import OptionItem from './OptionItem';

function Options({ options, handleOptions }) {
  return (
    <Opt>
      <Title>options</Title>
      <OptionItem
        label='min price (per night)'
        id='minPrice'
        name='minPrice'
        value={options?.minPrice}
        handleOptions={handleOptions}
      />
      <OptionItem
        label='max price (per night)'
        id='maxPrice'
        name='maxPrice'
        value={options?.maxPrice}
        handleOptions={handleOptions}
      />
      <OptionItem
        label='adult'
        id='adults'
        name='adult'
        value={options?.adult}
        handleOptions={handleOptions}
      />
      <OptionItem
        label='children'
        name='children'
        id='children'
        value={options?.children}
        handleOptions={handleOptions}
      />
      <OptionItem
        label='room'
        id='rooms'
        value={options?.room}
        name='room'
        handleOptions={handleOptions}
      />
    </Opt>
  );
}

export default Options;
