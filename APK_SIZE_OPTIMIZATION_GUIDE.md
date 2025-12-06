# APK大小优化指南

## 🎯 优化目标
减少Android APK文件大小，提高下载和安装效率。

## ✅ 已应用的优化措施

### 1. 架构优化
- **移除了x86和x86_64架构支持**
- **仅保留armeabi-v7a和arm64-v8a**
- **预期减少：约15-20MB**

### 2. 代码混淆和压缩
- **启用ProGuard**：`android.enableProguardInReleaseBuilds=true`
- **启用资源压缩**：`android.enableShrinkResourcesInReleaseBuilds=true`
- **优化ProGuard规则**：移除了调试日志，启用了高级优化
- **预期减少：约30-50%**

### 3. 媒体格式优化
- **禁用GIF支持**：`expo.gif.enabled=false`
- **禁用WebP支持**：`expo.webp.enabled=false`
- **预期减少：约3-5MB**

### 4. 构建优化
- **启用PNG压缩**：`android.enablePngCrunchInReleaseBuilds=true`
- **启用资源压缩**：自动移除未使用资源
- **预期减少：约10-20%**

## 📋 构建命令

### 生成优化后的Release APK
```bash
cd android
./gradlew assembleRelease --no-daemon
```

### 生成App Bundle (推荐)
```bash
cd android
./gradlew bundleRelease --no-daemon
```

## 📊 预期优化效果

| 优化项目 | 原始大小 | 优化后大小 | 减少比例 |
|---------|---------|-----------|----------|
| 架构过滤 | ~45MB | ~30MB | ~33% |
| 代码混淆 | ~30MB | ~18MB | ~40% |
| 资源压缩 | ~18MB | ~15MB | ~17% |
| 媒体格式 | ~15MB | ~12MB | ~20% |
| **总计** | **~45MB** | **~12MB** | **~73%** |

## 🔧 进一步优化建议

### 1. 分包配置（App Bundle）
使用Android App Bundle格式，Google Play会自动为每个设备生成最优化的APK。

### 2. 动态功能模块
将不常用的功能拆分为动态模块，按需下载。

### 3. 资源优化
- 使用矢量图形替代位图
- 优化图片尺寸和质量
- 移除未使用的本地化资源

### 4. 依赖项审查
定期检查和移除未使用的依赖项。

## ⚠️ 注意事项

1. **测试充分**：优化后需要充分测试应用功能
2. **性能监控**：监控优化后的应用性能
3. **兼容性检查**：确保在不同设备上的兼容性
4. **备份配置**：保留原始配置以备回滚

## 🚀 快速验证

构建完成后，可以通过以下命令查看APK信息：
```bash
cd android/app/build/outputs/apk/release
ls -lh
```

## 📁 输出位置

- **APK文件**：`android/app/build/outputs/apk/release/app-release.apk`
- **AAB文件**：`android/app/build/outputs/bundle/release/app-release.aab`