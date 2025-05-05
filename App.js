import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CustomMainMenuScreen from './screens/CustomMainMenuScreen';
import LoopImpedanceScreen from './screens/LoopImpedanceScreen';
import ShortCircuitCurrentScreen from './screens/ShortCircuitCurrentScreen';
import TouchVoltageScreen from './screens/TouchVoltageScreen';
import EarthResistanceScreen from './screens/EarthResistanceScreen';
import RcdTestScreen from './screens/RcdTestScreen';
import VoltageDropScreen from './screens/VoltageDropScreen';
import LpzAssessmentScreen from './screens/LpzAssessmentScreen';
import LplAssessmentScreen from './screens/LplAssessmentScreen';
import SelectivityScreen from './screens/SelectivityScreen';
import EvaluationScreen from './screens/EvaluationScreen';
import InitialInspectionReportScreen from './screens/InitialInspectionReportScreen';
import PeriodicInspectionReportScreen from './screens/PeriodicInspectionReportScreen';
import PortableToolInspectionScreen from './screens/PortableToolInspectionScreen';
import DefectListScreen from './screens/DefectListScreen';
import PdfExportScreen from './screens/PdfExportScreen';
import VisualLightningInspectionScreen from './screens/VisualLightningInspectionScreen';
import MeasuredLightningInspectionScreen from './screens/MeasuredLightningInspectionScreen';
import StandardsScreen from './screens/StandardsScreen';
import ExtraFeaturesScreen from './screens/ExtraFeaturesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CustomMainMenuScreen" component=CustomMainMenuScreen />
<Stack.Screen name="LoopImpedanceScreen" component=LoopImpedanceScreen />
<Stack.Screen name="ShortCircuitCurrentScreen" component=ShortCircuitCurrentScreen />
<Stack.Screen name="TouchVoltageScreen" component=TouchVoltageScreen />
<Stack.Screen name="EarthResistanceScreen" component=EarthResistanceScreen />
<Stack.Screen name="RcdTestScreen" component=RcdTestScreen />
<Stack.Screen name="VoltageDropScreen" component=VoltageDropScreen />
<Stack.Screen name="LpzAssessmentScreen" component=LpzAssessmentScreen />
<Stack.Screen name="LplAssessmentScreen" component=LplAssessmentScreen />
<Stack.Screen name="SelectivityScreen" component=SelectivityScreen />
<Stack.Screen name="EvaluationScreen" component=EvaluationScreen />
<Stack.Screen name="InitialInspectionReportScreen" component=InitialInspectionReportScreen />
<Stack.Screen name="PeriodicInspectionReportScreen" component=PeriodicInspectionReportScreen />
<Stack.Screen name="PortableToolInspectionScreen" component=PortableToolInspectionScreen />
<Stack.Screen name="DefectListScreen" component=DefectListScreen />
<Stack.Screen name="PdfExportScreen" component=PdfExportScreen />
<Stack.Screen name="VisualLightningInspectionScreen" component=VisualLightningInspectionScreen />
<Stack.Screen name="MeasuredLightningInspectionScreen" component=MeasuredLightningInspectionScreen />
<Stack.Screen name="StandardsScreen" component=StandardsScreen />
<Stack.Screen name="ExtraFeaturesScreen" component=ExtraFeaturesScreen />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
