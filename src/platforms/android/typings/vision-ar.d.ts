/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module mapbox {
		export module vision {
			export module ar {
				export class BuildConfig {
					public static class: java.lang.Class<com.mapbox.vision.ar.BuildConfig>;
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module ar {
				export class LaneVisualParams {
					public static class: java.lang.Class<com.mapbox.vision.ar.LaneVisualParams>;
					public static Companion: com.mapbox.vision.ar.LaneVisualParams.Companion;
					public constructor(param0: com.mapbox.vision.ar.core.models.Color, param1: number, param2: com.mapbox.vision.mobile.core.models.world.WorldCoordinate, param3: com.mapbox.vision.ar.core.models.Color, param4: com.mapbox.vision.ar.core.models.Color);
					public constructor();
					public getAmbientColor(): com.mapbox.vision.ar.core.models.Color;
					public getWidth(): number;
					public static isValid(param0: com.mapbox.vision.ar.core.models.Color): boolean;
					public getColor(): com.mapbox.vision.ar.core.models.Color;
					public getLightColor(): com.mapbox.vision.ar.core.models.Color;
					public getLight(): com.mapbox.vision.mobile.core.models.world.WorldCoordinate;
					public static isValid(param0: number): boolean;
				}
				export module LaneVisualParams {
					export class Companion {
						public static class: java.lang.Class<com.mapbox.vision.ar.LaneVisualParams.Companion>;
						public isValid(param0: number): boolean;
						public isValid(param0: com.mapbox.vision.ar.core.models.Color): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module ar {
				export class VisionArManager {
					public static class: java.lang.Class<com.mapbox.vision.ar.VisionArManager>;
					public static INSTANCE: com.mapbox.vision.ar.VisionArManager;
					public static create(param0: com.mapbox.vision.VisionManager, param1: com.mapbox.vision.ar.core.VisionArEventsListener): void;
					public static setRoute(param0: com.mapbox.vision.ar.core.models.Route): void;
					public registerModule(param0: number): void;
					public static destroy(): void;
					public unregisterModule(): void;
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module ar {
				export module view {
					export module gl {
						export class Background extends com.mapbox.vision.ar.view.gl.GlRender.OnSurfaceChangedListener {
							public static class: java.lang.Class<com.mapbox.vision.ar.view.gl.Background>;
							public static Companion: com.mapbox.vision.ar.view.gl.Background.Companion;
							public updateTexture(param0: native.Array<number>): void;
							public constructor(param0: number, param1: number);
							public onSurfaceChanged(): void;
							public draw(): void;
						}
						export module Background {
							export class Companion {
								public static class: java.lang.Class<com.mapbox.vision.ar.view.gl.Background.Companion>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module ar {
				export module view {
					export module gl {
						export class Camera {
							public static class: java.lang.Class<com.mapbox.vision.ar.view.gl.Camera>;
							public getViewProjectionMatrix(): com.mapbox.vision.ar.view.gl.Matrix4;
							public constructor(param0: number, param1: number, param2: number, param3: com.mapbox.vision.ar.view.gl.Rotation, param4: com.mapbox.vision.ar.view.gl.Vector3);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module ar {
				export module view {
					export module gl {
						export class GlRender {
							public static class: java.lang.Class<com.mapbox.vision.ar.view.gl.GlRender>;
							public static Companion: com.mapbox.vision.ar.view.gl.GlRender.Companion;
							public setArLane$mapbox_android_vision_ar_release(param0: com.mapbox.vision.ar.core.models.ArLane): void;
							public onNewBackground$mapbox_android_vision_ar_release(param0: native.Array<number>): void;
							public onDrawFrame(param0: javax.microedition.khronos.opengles.GL10): void;
							public getArLane$mapbox_android_vision_ar_release(): com.mapbox.vision.ar.core.models.ArLane;
							public onSurfaceChanged(param0: javax.microedition.khronos.opengles.GL10, param1: number, param2: number): void;
							public onNewLaneVisualParams$mapbox_android_vision_ar_release(param0: com.mapbox.vision.ar.LaneVisualParams): void;
							public getArCamera$mapbox_android_vision_ar_release(): com.mapbox.vision.ar.core.models.ArCamera;
							public constructor(param0: globalAndroid.content.Context, param1: number, param2: number);
							public setArCamera$mapbox_android_vision_ar_release(param0: com.mapbox.vision.ar.core.models.ArCamera): void;
							public onSurfaceCreated(param0: javax.microedition.khronos.opengles.GL10, param1: javax.microedition.khronos.egl.EGLConfig): void;
						}
						export module GlRender {
							export class Companion {
								public static class: java.lang.Class<com.mapbox.vision.ar.view.gl.GlRender.Companion>;
								public loadShader(param0: number, param1: string): number;
								public checkGlError(param0: string): void;
							}
							export class OnSurfaceChangedListener {
								public static class: java.lang.Class<com.mapbox.vision.ar.view.gl.GlRender.OnSurfaceChangedListener>;
								/**
								 * Constructs a new instance of the com.mapbox.vision.ar.view.gl.GlRender$OnSurfaceChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onSurfaceChanged(): void;
								});
								public constructor();
								public onSurfaceChanged(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module ar {
				export module view {
					export module gl {
						export class Lane extends com.mapbox.vision.ar.view.gl.GlRender.OnSurfaceChangedListener {
							public static class: java.lang.Class<com.mapbox.vision.ar.view.gl.Lane>;
							public static LANE_DEFAULT_WIDTH: number;
							public static Companion: com.mapbox.vision.ar.view.gl.Lane.Companion;
							public draw(param0: com.mapbox.vision.ar.view.gl.Matrix4, param1: com.mapbox.vision.ar.view.gl.Matrix4, param2: com.mapbox.vision.ar.view.gl.Matrix3, param3: native.Array<number>): void;
							public onSurfaceChanged(): void;
							public setLaneVisualParams(param0: com.mapbox.vision.ar.LaneVisualParams): void;
							public constructor(param0: globalAndroid.content.Context);
						}
						export module Lane {
							export class Companion {
								public static class: java.lang.Class<com.mapbox.vision.ar.view.gl.Lane.Companion>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module ar {
				export module view {
					export module gl {
						export class MathKt {
							public static class: java.lang.Class<com.mapbox.vision.ar.view.gl.MathKt>;
							public static directByteBufferOf(param0: number): java.nio.ByteBuffer;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module ar {
				export module view {
					export module gl {
						export class Matrix3 {
							public static class: java.lang.Class<com.mapbox.vision.ar.view.gl.Matrix3>;
							public constructor();
							public get(param0: number, param1: number): number;
							public constructor(param0: native.Array<number>);
							public set(param0: number, param1: number, param2: number): void;
							public toFloatArray(): native.Array<number>;
							public transposed(): com.mapbox.vision.ar.view.gl.Matrix3;
							public inverted(): com.mapbox.vision.ar.view.gl.Matrix3;
							public unaryMinus(): com.mapbox.vision.ar.view.gl.Matrix3;
							public times(param0: com.mapbox.vision.ar.view.gl.Vector3): com.mapbox.vision.ar.view.gl.Vector3;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module ar {
				export module view {
					export module gl {
						export class Matrix4 {
							public static class: java.lang.Class<com.mapbox.vision.ar.view.gl.Matrix4>;
							public constructor();
							public get(param0: number, param1: number): number;
							public constructor(param0: native.Array<number>);
							public toMatrix3(): com.mapbox.vision.ar.view.gl.Matrix3;
							public times(param0: com.mapbox.vision.ar.view.gl.Matrix4): com.mapbox.vision.ar.view.gl.Matrix4;
							public set(param0: number, param1: number, param2: number): void;
							public toFloatArray(): native.Array<number>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module ar {
				export module view {
					export module gl {
						export class Rotation {
							public static class: java.lang.Class<com.mapbox.vision.ar.view.gl.Rotation>;
							public setYaw(param0: number): void;
							public setRoll(param0: number): void;
							public constructor(param0: number, param1: number, param2: number);
							public setPitch(param0: number): void;
							public getPitch(): number;
							public getYaw(): number;
							public getRoll(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module ar {
				export module view {
					export module gl {
						export class Vector3 {
							public static class: java.lang.Class<com.mapbox.vision.ar.view.gl.Vector3>;
							public constructor();
							public getY(): number;
							public constructor(param0: number, param1: number, param2: number);
							public getZ(): number;
							public getX(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module mapbox {
		export module vision {
			export module ar {
				export module view {
					export module gl {
						export class VisionArView {
							public static class: java.lang.Class<com.mapbox.vision.ar.view.gl.VisionArView>;
							public onNewCameraParameters(param0: com.mapbox.vision.mobile.core.models.CameraParameters): void;
							public onArCameraUpdated(param0: com.mapbox.vision.ar.core.models.ArCamera): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public _$_clearFindViewByIdCache(): void;
							public onArLaneUpdated(param0: com.mapbox.vision.ar.core.models.ArLane): void;
							public _$_findCachedViewById(param0: number): globalAndroid.view.View;
							public setLaneVisualParams(param0: com.mapbox.vision.ar.LaneVisualParams): void;
							public onNewFrame(param0: native.Array<number>, param1: com.mapbox.vision.mobile.core.models.frame.ImageFormat, param2: com.mapbox.vision.mobile.core.models.frame.ImageSize): void;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

//Generics information:

