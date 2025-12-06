# Release构建指南

## 快速开始

### 方法1：使用NPM脚本（推荐）
```bash
# 构建Release APK
npm run android:build

# 构建Release App Bundle（推荐用于Play Store）
npm run android:bundle

# 清理构建缓存
npm run android:clean
```

### 方法2：使用Expo CLI
```bash
npx expo run:android --variant release
```

### 方法3：直接使用Gradle
```bash
cd android
./gradlew assembleRelease --no-daemon
```

## 输出位置

- **APK文件**: `android/app/build/outputs/apk/release/app-release.apk`
- **AAB文件**: `android/app/build/outputs/bundle/release/app-release.aab`

## 构建优化

我们已经为你的项目配置了以下优化措施：

1. **架构优化**: 只构建 `armeabi-v7a` 和 `arm64-v8a`
2. **代码混淆**: 启用ProGuard/R8进行代码压缩和混淆
3. **资源压缩**: 移除未使用的资源
4. **媒体格式**: 禁用GIF和WebP支持（如需可重新启用）
5. **日志移除**: 移除调试日志

## 预期大小

通过这些优化，你的APK大小预计从45MB减少到约12MB，减少约73%。

## 注意事项

1. **首次构建**: 首次构建可能需要较长时间（5-10分钟）
2. **签名配置**: 确保你的 `android/app/build.gradle` 中的签名配置正确
3. **ProGuard规则**: 如果遇到类找不到的错误，请更新 `android/app/proguard-rules.pro`

## 故障排除

### 常见问题

1. **端口占用**: 如果端口被占用，尝试使用不同的端口或关闭占用程序
2. **内存不足**: 如果构建失败，尝试增加Gradle内存：
   ```
   org.gradle.jvmargs=-Xmx4g -XX:MaxPermSize=512m
   ```
3. **依赖冲突**: 清理并重新构建：
   ```bash
   npm run android:clean
   npm run android:build
   ```

### 获取帮助

如果构建失败，请查看完整的错误日志，通常会提供具体的解决方案。