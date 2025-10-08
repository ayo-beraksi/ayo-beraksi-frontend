import InlineSvg from "@/components/inline-svg";
import useNextOnboarding from "@/hooks/use-next-onboarding";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const FOOTER_VERTICAL_GAP_PX = 16;
const BUTTON_VERTICAL_PADDING_PX = 18;

export default function HomeScreen() {
  const { handleNext, content, activeIndex } = useNextOnboarding();
  const { bottom: bottomSafeInset } = useSafeAreaInsets();

  const estimatedFooterHeightPx = BUTTON_VERTICAL_PADDING_PX * 2 + 20;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1">
        <View className="absolute right-5 top-0 z-10">
          <Text
            className={`text-[#00BF63] font-medium ${activeIndex === 2 ? "hidden" : ""}`}
          >
            Skip
          </Text>
        </View>

        <ScrollView
          className="flex-1 px-5"
          contentContainerStyle={{
            flexGrow: 1,
            paddingTop: 40,
            paddingBottom:
              estimatedFooterHeightPx +
              FOOTER_VERTICAL_GAP_PX +
              bottomSafeInset,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View className="items-center">
            <InlineSvg size={144} className="mb-[45px]" />

            <Text className="text-[28px] text-[#606060] mb-2 font-bold text-center">
              {content.title}
            </Text>

            <Text className="text-[#8D8D8D] font-medium mt-2 text-center">
              {content.description}
            </Text>
          </View>
        </ScrollView>

        <View
          style={{
            position: "absolute",
            left: 20,
            right: 20,
            bottom: FOOTER_VERTICAL_GAP_PX + bottomSafeInset,
          }}
        >
          <View className="gap-[6px] flex-row items-center justify-center mb-[47px]">
            {Array.from({ length: 3 }).map((_, idx) => (
              <View
                className={`rounded-[10px] h-2 ${idx === activeIndex ? "w-[19px] bg-[#00BF63]" : "w-2 bg-[#E1E1E1]"}`}
                key={idx}
              />
            ))}
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleNext}
            disabled={activeIndex === 2}
            className="w-full rounded-2xl overflow-hidden"
          >
            <LinearGradient
              colors={["#00BF63", "#048949"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              className="py-[18px] rounded-2xl"
            >
              <Text className="font-medium text-white text-center">
                {activeIndex === 2 ? "Mulai Sekarang" : "Lanjut"}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
