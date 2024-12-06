import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Divider
} from '@mui/material';
import { 
  VEHICLE_TYPES, 
  COVERAGE_TYPES, 
  EXTRAS, 
  TARIFFS, 
  BUDGET_TARIFFS, 
  MILEAGE_OPTIONS 
} from '../constants/tariffData';

function SummaryStep({ formData }) {
  const calculatePrice = () => {
    const { vehicleType, coverage, bonusLevel, mileage, carBrand } = formData;
    
    if (!vehicleType || !coverage || !bonusLevel || !mileage) {
      return 0;
    }

    // Hent grunnpris fra tariff
    let basePrice;
    if (vehicleType === 'BUDGET') {
      basePrice = BUDGET_TARIFFS[coverage][bonusLevel];
    } else {
      basePrice = TARIFFS[vehicleType]?.[coverage]?.[bonusLevel] || 0;
    }

    // Finn kjørelengdefaktor
    const mileageOption = MILEAGE_OPTIONS.find(option => option.value === Number(mileage));
    const mileageFactor = mileageOption ? mileageOption.factor : 1.0;

    return basePrice * mileageFactor;
  };

  const selectedExtras = EXTRAS.filter(extra => 
    formData.extras.includes(extra.id)
  );

  const totalExtras = selectedExtras.reduce(
    (sum, extra) => sum + extra.price, 
    0
  );

  // Finn kjørelengde-label
  const getMileageLabel = () => {
    const option = MILEAGE_OPTIONS.find(
      opt => opt.value === Number(formData.mileage)
    );
    return option ? option.label : formData.mileage;
  };

  const totalPrice = calculatePrice() + totalExtras;

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Oppsummering
      </Typography>
      
      <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
        <Typography variant="subtitle1">
          Kjøretøyinformasjon
        </Typography>
        <Typography variant="body2">
          Type: {VEHICLE_TYPES[formData.vehicleType]}
        </Typography>
        <Typography variant="body2">
          Kjørelengde: {getMileageLabel()}
        </Typography>
        {formData.carBrand && (
          <Typography variant="body2">
            Bilmerke: {formData.carBrand}
          </Typography>
        )}
      </Paper>

      <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
        <Typography variant="subtitle1">
          Forsikringsdetaljer
        </Typography>
        <Typography variant="body2">
          Dekning: {COVERAGE_TYPES[formData.coverage]}
        </Typography>
        <Typography variant="body2">
          Bonus: {formData.bonusLevel}
        </Typography>
      </Paper>

      {selectedExtras.length > 0 && (
        <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
          <Typography variant="subtitle1">
            Valgte tillegg
          </Typography>
          {selectedExtras.map(extra => (
            <Typography key={extra.id} variant="body2">
              {extra.label}: {extra.price.toFixed(2)} kr
            </Typography>
          ))}
        </Paper>
      )}

      <Divider sx={{ my: 2 }} />

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h6">Total årspremie:</Typography>
        <Typography variant="h6">
          {totalPrice.toFixed(2)} kr
        </Typography>
      </Box>
    </Box>
  );
}

export default SummaryStep; 