import React, { useState } from 'react';
import FormTab from './FormTab';

export const generateSection = (
  name = '',
  status = 'unavailable',
  isActive = false,
) => ({ name, status, isActive });

function FormContainer({ onComplete }) {
  const [sections, setSections] = useState([
    generateSection('What is OK short for?', 'available', true),
    generateSection('Do plants die of old age?'),
    generateSection('Do hot drinks cool you down?'),
    generateSection('Can germs catch germs?'),
    generateSection('What is a hiccup?'),
  ]);

  const completeSection = (sectionIndex) => {
    const newSections = sections.map((section, index) => {
      const isNextSectionUnavailable = (sections[sectionIndex + 1] || {}).status === 'unavailable';
      const makeNextSectionAvailable = index === sectionIndex && isNextSectionUnavailable
      return {
        ...section,
        ...(index === sectionIndex
          ? { status: 'complete', isActive: !makeNextSectionAvailable }
          : {}),
        ...(index === sectionIndex + 1
          ? { status: 'available', isActive: true }
          : {}
        ),
      };
    });
    setSections(newSections);
    const allSectionsComplete = newSections.every((section) => section.status === 'complete');
    if (allSectionsComplete) {
      onComplete(true);
    }
  };

  const updateSectionStatus = (sectionIndex, status) => {
    if (status === 'complete') {
      completeSection(sectionIndex);
    } else {
      setSections(sections.map((section, index) => {
        return {
          ...section,
          ...(index === sectionIndex ? { status } : {}),
          ...(index > sectionIndex ? { status: 'unavailable' } : {}),
        };
      }));
    }
  };

  const handleTabClick = (sectionIndex) => {
    const isClickable = sections.find((section, index) =>
      index === sectionIndex && section.status !== 'unavailable'
    );
    if (isClickable) {
      setSections(sections.map((section, index) => ({
        ...section,
        isActive: index === sectionIndex,
      })));
    }
  };

  return (
    <div className="Form-container">
      <div className="Form-tabs">
        {sections.map(({ name, status, isActive }, index) => (
          <FormTab
            key={index}
            name={name}
            status={status}
            isActive={isActive}
            onClick={() => handleTabClick(index)}
          />
        ))}
      </div>
      <div className="Form-content">
        {sections.map(({ name, status, isActive }, index) => (
          <div key={index} className={isActive ? 'active' : ''}>
            <h4>{name}</h4>
            <div className="button-container">
              {status === 'complete' && (
                <button className="incomplete" onClick={() => updateSectionStatus(index, 'incomplete')}>
                  Incomplete
                </button>
              )}
              {status !== 'unavailable' && status !== 'complete' && (
                <button className="complete" onClick={() => completeSection(index)}>
                  Complete
                </button>
              )}
              {status !== 'unavailable' && status !== 'invalid' && (
                <button className="invalid" onClick={() => updateSectionStatus(index, 'invalid')}>
                  Invalidate
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FormContainer;
