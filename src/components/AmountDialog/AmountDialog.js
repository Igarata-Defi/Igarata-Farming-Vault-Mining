import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { byDecimals, calculateReallyNum, formatDecimals } from 'features/helpers/bignumber';
import { inputLimitPass, inputFinalVal } from 'features/helpers/utils';

import Dialog from 'components/Dialog/Dialog';
import Spinner from 'components/Spinner/Spinner';

import CustomSlider from 'components/CustomSlider/CustomSlider';

import styles from './styles';
const useStyles = createUseStyles(styles);

const AmountDialog = ({
  title,
  buttonText,
  buttonIsLoading,
  tokensAmounts,
  open,
  onConfirm,
  onClose,
  children
}) => {
  const classes = useStyles();

  const [amounts, setAmounts] = useState(Array(tokensAmounts?.length).fill({
    number: '0',
    slider: 0
  }));

  useEffect(() => {
    tokensAmounts.forEach((token, index) => {
      const amount = +amounts[index]?.number.replace(/,/g, '') || 0;
      if (amount > token.balance.toNumber()) {
        setAmount(index, {
          number: inputFinalVal(amounts[index].number, token.balance.toNumber(), token.decimals),
          slider: 100
        });
      }
    });
  }, [tokensAmounts])

  const setAmount = (index, amount) => {
    const newAmounts = [...amounts];
    newAmounts[index] = amount;

    setAmounts(newAmounts);
  }

  const onInputChange = (event, inputIndex) => {
    const token = tokensAmounts[inputIndex];

    let value = event.target.value;
    const total = token.balance.toNumber();

    if (!inputLimitPass(value, token.decimals)) {
      return;
    }

    let sliderNum = 0;
    let inputVal = 0;
    if (value) {
      inputVal = Number(value.replace(/,/g, ''));
      sliderNum = byDecimals(inputVal / total, 0).toFormat(2) * 100;
    }

    setAmount(inputIndex, {
      number: inputFinalVal(value, total, token.decimals),
      slider: sliderNum,
    });
  };

  const onSliderChange = (_, sliderNum, inputIndex) => {
    const token = tokensAmounts[inputIndex];
    const total = token.balance.toNumber();

    let amount = 0;

    if (sliderNum == 100) {
      amount = byDecimals(token.balance, 0).toFormat(token.decimals);
    } else if (sliderNum > 0) {
      amount = inputFinalVal(calculateReallyNum(total, sliderNum), total, token.decimals);
    }

    setAmount(inputIndex, {
      number: amount,
      slider: sliderNum,
    });
  };

  const onBalanceButton = (inputIndex) => {
    const token = tokensAmounts[inputIndex];

    setAmount(inputIndex, {
      number: byDecimals(token.balance, 0).toFormat(token.decimals),
      slider: 100
    })
  }

  const onConfirmButton = () => {
    const items = [];

    for (let i = 0; i < tokensAmounts.length; i++) {
      items.push(amounts[i]
        ? ((amounts[i].number || 0) + '').replace(/,/g, '')
        : 0
      );
    }

    onConfirm(items.length > 1 ? items : items[0]);
  }

  const controls = (
    <>
      <button
        className={classes.button}
        onClick={onConfirmButton}
        disabled={buttonIsLoading}
      >
        {!buttonIsLoading
          ? buttonText
          : (<Spinner/>)}
      </button>
    </>
  )

  return (
    <>
      <Dialog open={open}
        onClose={onClose}
        title={title}
        controls={controls}
      >
        { children }

        {tokensAmounts.map((token, index) => {
          return (
            <div
              key={token.token}
              className={classes.tokenBlock}
            >
              <div className={classes.labelWithAddon}>
                <label>{ tokensAmounts.length > 1 ? token.token + ' amount' : 'Amount' }</label>
                <button
                  className={classes.balanceButton}
                  onClick={() => onBalanceButton(index)}
                  tabIndex="-1"
                >
                  max: <span>{ formatDecimals(token.balance) }</span>
                </button>
              </div>

              <div className={classes.inputWithAddon}>
                {token.image && (
                  <div className={classes.inputAddonPre}>
                    <img src={require('images/' + token.image)} />
                  </div>
                )}
                <input type="text"
                  className={classes.input}
                  value={amounts[index] ? amounts[index].number : 0}
                  onChange={ev => onInputChange(ev, index)}
                />
              </div>

              {tokensAmounts.length == 1 && (
                <>
                  {/* Slider */}
                  <div className={classes.sliderWrapper}>
                    <CustomSlider
                      classes={{
                        root: classes.sliderRoot,
                        markLabel: classes.sliderMarkLabel,
                      }}
                      aria-labelledby="continuous-slider"
                      value={amounts[index].slider}
                      valueLabelDisplay="off"
                      onChange={(ev, sliderNum) => onSliderChange(ev, sliderNum, index)}
                    />
                  </div>
                </>
              )}
            </div>
          )
        })}
      </Dialog>
    </>
  );
}

export default AmountDialog;