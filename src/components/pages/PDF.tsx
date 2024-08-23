import { PDFViewer } from '@react-pdf/renderer'
import { FC, useContext } from 'react'
import { InputInfoContext } from '../../provider/InputInfoProvider'

'use client'

import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from '@react-pdf/renderer'


Font.register({
  family: 'NotoSansJP',
  fonts: [
    {
      src: '../fonts/NotoSansJP-VariableFont_wght.ttf',
    },
    {
      src: '../fonts/NotoSansJP-Bold.ttf',
      fontWeight: 'bold',
    },
  ],
})

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 11,
    fontFamily: 'NotoSansJP',
  },
  header: {
    textAlign: 'right'
  },
  title: {
    fontSize: 24,
    marginBottom: 60,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  itemsTable: {
    display: 'flex',
    width: 'auto',
    borderStyle: 'solid',
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    width: '80%',
    margin: 'auto',
  },
  tableTh : {
    fontWeight: 900,
    marginTop: '15px',
    marginBottom: '2px'
  },
  tableTd : {
    marginLeft: '10px',
  },
})


export const PDF:FC = () => {
  const { inputInfo } = useContext(InputInfoContext)

  return(
    <PDFViewer style={{ 'width': '100%', 'height' :'95vh' }}>
      <Document>
        <Page style={styles.page} size='A4'>
          <View>
            <Text style={styles.header}>出力日: {inputInfo?.date}</Text>
          </View>
          <View>
            <Text style={styles.title}>入力情報</Text>
          </View>
          <View>
            <View style={styles.itemsTable}>
                <View style={styles.tableRow}>
                  <Text style={styles.tableTh}>氏名</Text>
                  <Text style={styles.tableTd}>{inputInfo?.name ?? '未入力'}</Text>
                  <Text style={styles.tableTh}>氏名（フリガナ）</Text>
                  <Text style={styles.tableTd}>{inputInfo?.nameKana ?? '未入力'}</Text>
                  <Text style={styles.tableTh}>電話番号</Text>
                  <Text style={styles.tableTd}>{inputInfo?.tel ?? '未入力'}</Text>
                  <Text style={styles.tableTh}>メールアドレス</Text>
                  <Text style={styles.tableTd}>{inputInfo?.mail ?? '未入力'}</Text>
                </View>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  )
}
