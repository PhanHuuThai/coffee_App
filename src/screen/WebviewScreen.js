import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { WebView } from 'react-native-webview'
import { useNavigation } from '@react-navigation/native';

const WebViewScreen = ({ route }) => {
    const { url } = route.params;

    const navigation = useNavigation();


    const handleReturnedUrl = (returnedUrl) => {
        // Xử lý returnedUrl để lấy thông tin cần thiết


        // Cập nhật trạng thái đơn hàng hoặc thanh toán trong hệ thống của bạn
        updateOrderStatus(orderId, paymentStatus);

        // Hiển thị thông báo cho người dùng
        if (paymentStatus === 'failure') {
            alert('Thanh toán thất bại. Vui lòng thử lại.');
        }
    };

    const extractPaymentStatusFromUrl = (url) => {
        // Xử lý và trích xuất thông tin trạng thái thanh toán từ URL
        // Ví dụ: Kiểm tra xem URL có chứa 'vnp_ResponseCode=00' hay không
        return url.includes('vnp_ResponseCode=00') ? 'success' : 'failure';
    };

    const updateOrderStatus = (orderId, paymentStatus) => {
        // Cập nhật trạng thái đơn hàng hoặc thanh toán trong hệ thống của bạn
        // Sử dụng API hoặc phương thức phù hợp
    };

    const handleWebViewNavigation = (navState) => {
        try {
            const returnedUrl = navState.url;

            const paymentStatus = extractPaymentStatusFromUrl(returnedUrl);

            if (returnedUrl.includes('vnp_ResponseCode')) {
                navigation.navigate('PaymentResult', { status: paymentStatus });
            } else {
                console.log("nonsucess");
            }
        } catch (error) {
            console.log(error);
        }

    };

    return (
        <View style={styles.container}>
            <WebView
                source={{ uri: url }}
                style={styles.webView}
                onNavigationStateChange={handleWebViewNavigation}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    webView: {
        flex: 1,
    },
});

export default WebViewScreen