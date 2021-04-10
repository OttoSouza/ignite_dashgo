import { Header } from "../components/Header";
import {
  Flex,
  SimpleGrid,
  Box,
  Text,
  theme,
  useColorMode,
} from "@chakra-ui/react";
import { Sidebar } from "../components/SideBar";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabes: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2021-03-25T00:00:00.000Z",
      "2021-03-26T00:00:00.000Z",
      "2021-03-27T00:00:00.000Z",
      "2021-03-28T00:00:00.000Z",
      "2021-03-29T00:00:00.000Z",
      "2021-03-30T00:00:00.000Z",
      "2021-03-31T00:00:00.000Z",
      "2021-04-01T00:00:00.000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [
  {
    name: "series-1",
    data: [30, 150, 80, 50, 10, 120, 70, 91],
  },
];

export default function DashBoard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Incritos da semana
            </Text>

            <Chart options={options} series={series} type="area" height={160} />
          </Box>

          <Box
            p="8"
            bg="gray.800"
            borderRadius="8"
            //pb="4"
          >
            <Text fontSize="lg" mb="4">
              taxa de Abertura
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
