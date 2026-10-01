import React from 'react';

/**
 * Reusable Specification Sheet Grid for Fabric Details
 */
const SpecificationGrid = ({ product, darkMode = true }) => {
  if (!product) return null;

  const specs = [
    { label: 'Fabric Composition', value: product.fabricType || 'Pure Cotton' },
    { label: 'Minimum Order (MOQ)', value: product.moq || '10 Meters' },
    { label: 'Standard Width', value: product.width || '44 Inches' },
    { label: 'Fabric Weight', value: product.gsm || 'Standard GSM' },
  ];

  return (
    <div className={`grid grid-cols-2 gap-y-2.5 gap-x-4 py-2.5 px-4 rounded-xl border text-xs ${
      darkMode 
        ? 'bg-brand-surface/40 border-brand-gold/20 text-gray-200' 
        : 'bg-brand-cream border-brand-gold/30 text-gray-800'
    }`}>
      {specs.map((item, index) => (
        <div key={index} className="space-y-0.5">
          <span className="block text-[10px] uppercase font-bold tracking-widest text-brand-gold">
            {item.label}
          </span>
          <span className="font-semibold text-xs sm:text-sm">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SpecificationGrid;
