import { createContext, ReactNode, useMemo } from "react";
import { View } from "react-native";
import { vars } from "nativewind";
import scaleFonts from "~/constants/scaleFonts";
import { scaleInfo } from "~/constants/scales";

interface StyleContextType {
    vars: Record<string, string>
}
const VariableContext = createContext<StyleContextType | undefined>(undefined);

interface StyleProviderProps {
    children: ReactNode;
}
export const RootLayout = ({ children }: StyleProviderProps) => {
    const generatedVars = useMemo(() => vars(scaleFonts), [scaleFonts]);
    const scaleInfoVars = useMemo(() => vars(scaleInfo), [scaleInfo])
    return (
        <VariableContext.Provider value={{ vars: generatedVars }}>
            <View
                style={[
                    { flex: 1, height: '100%', width: '100%' },
                    generatedVars,
                    scaleInfoVars
                ]}
            >
                {children}
            </View>
        </VariableContext.Provider>
    )
};