import React, { Fragment, useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
import { Listbox, Transition } from '@headlessui/react';

import { CheckIcon, ChevronDownIcon } from '@heroicons/react/outline'

import styles from './styles';
const useStyles = createUseStyles(styles);

const Select = ({ options, selected, multiple, placeholder, icon, onChange, className, bgColor }) => {
  const classes = useStyles();

  const [label, setLabel] = useState('')

  useEffect(() => {
    const items = multiple ? selected : [selected];

    if (items && items.length) {
      const selectedNames = [];

      options.forEach(item => {
        if (items.indexOf(item.value) !== -1) {
          selectedNames.push(item.name)
        }
      });

      setLabel(selectedNames.join(', '));
    } else {
      setLabel(placeholder || 'Not selected');
    }
  }, [selected]);

  const toggleItem = (item) => {
    if (multiple) {
      const items = [...selected];

      const index = items.indexOf(item);
      if (index != -1) {
        items.splice(index, 1);
      } else {
        items.push(item);
      }

      onChange(items);
    } else {
      onChange(item);
    }
  }

  return (
    <>
      <Listbox
        as="div"
        value={selected}
        onChange={toggleItem}
        className={classes.wrapper + (className ? ' ' + className : '')}
      >
        {({ open }) => (
          <>
            <Listbox.Button className={classes.select + (icon ? ' with-icon' : '') + (bgColor == 'dark' ? ' bg-dark' : '')}>
              { icon && (
                <span className={classes.icon}>{ icon }</span>
              )}

              { label }

              <span className={classes.chevron + (open ? ' open' : '')}>
                <ChevronDownIcon />
              </span>
            </Listbox.Button>

            <Transition
              as={Fragment}
              enter={classes.transitionFade}
              enterFrom={classes.transitionFadeClosed}
              enterTo={classes.transitionFadeOpen}
              leave={classes.transitionFade}
              leaveFrom={classes.transitionFadeOpen}
              leaveTo={classes.transitionFadeClosed}
            >
              <Listbox.Options className={classes.options}>
                {options.map((item, index) => (
                  <Listbox.Option
                    key={index}
                    className={classNames(
                      classes.option,
                      {
                        active: multiple ? selected.includes(item.value) : selected == item.value,
                        multiple: multiple
                      }
                    )}
                    value={item.value}
                  >
                    <span>{ item.name }</span>

                    {multiple && selected.includes(item.value) && (
                      <CheckIcon />
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </>
        )}
      </Listbox>
    </>
  )

}

export default Select;